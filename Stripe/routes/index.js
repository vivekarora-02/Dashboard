const express = require('express')
const router = express.Router()

const Payment = require('../models/payment');

const stripe = require('stripe')('sk_test_51Hjm9HEGIkVG2Yz9fCLWHan3G3pI9qKtFqif2YR1Pz0xmMzNbcdzfEKIAAij2xz7cLhqNaJqcwV5eSPRxuMxnNrh00tAflTSbj');

router.post('/', async (req, res, next) => {
    try {
        const account = await stripe.accounts.create({
            country: 'IN',
            type: 'standard',
            // capabilities: { card_payments: { requested: true }, transfers: { requested: true } },
            business_type: 'individual',
            business_profile: { url: 'https://ezyinn.net' },
        });
        console.log(account);
        const accountLink = await stripe.accountLinks.create({
            account: account.id,
            refresh_url: 'https://example.com/reauth',
            return_url: 'https://example.com/return',
            type: 'account_onboarding',
        });
        console.log(accountLink);
        const paymentDetails = new Payment({
            accountId: account.id,
            accountLink: accountLink.url
        });
        paymentDetails.save();
        res.status(201).json({
            message: 'Account Created Successfully',
            accountId: account,
            accountLink: accountLink
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

})

router.get('/', async (req, res, next) => {
    const accountId = req.body.accountId;
    const cardNumber = req.body.cardNumber;
    const exp_month = req.body.exp_month;
    const exp_year = req.body.exp_year;
    const cvc = req.body.cvc;
    const amount = req.body.amount;
    try {
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
                number: cardNumber,
                exp_month: exp_month,
                exp_year: exp_year,
                cvc: cvc,
            },
        }, {
            stripeAccount: accountId,
        });
        // console.log(paymentMethod);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'inr',
            application_fee_amount: 123,
            payment_method: paymentMethod.id,
            off_session: true,
            confirm: true,
        }, {
            stripeAccount: accountId,
        });
        console.log(paymentIntent);

        // const paymentIntent = await stripe.paymentIntents.retrieve(
        //     'pi_3ME4R2SFrEIUXw4106R3QFrR', { stripeAccount: 'acct_1MBveUSFrEIUXw41' }
        // );
        const account = await Payment.findOne({ accountId: accountId });
        let chargeId = paymentIntent.charges.data[0].id;
        // console.log(chargeId);
        if (account.paymentsReceived) {
            account.paymentsReceived.push(chargeId);
        } else {
            account.paymentsReceived = [chargeId];
        }
        await account.save()
        res.status(200).json({
            message: 'Payment Successful',
            paymentMethod: paymentMethod,
            paymentIntent: paymentIntent
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
})

router.patch('/', async (req, res, next) => {
    const chargeId = req.body.chargeId;
    const accountId = req.body.accountId;
    const amount = req.body.amount;
    try {
        const refund = await stripe.refunds.create({
            charge: chargeId,
            amount: amount
        }, {
            stripeAccount: accountId,
        });
        res.status(200).json({
            message: 'Refund Successful',
            refund: refund
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
})
module.exports = router
