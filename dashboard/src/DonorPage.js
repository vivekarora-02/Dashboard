import React from 'react';
import { motion } from 'framer-motion';

const donorData = [
  {
    name: 'Alice Smith',
    medicalId: '13579',
    organDonation: 'Liver',
    address: '321 Main St, Anytown USA'
  },
  {
    name: 'Bob Johnson',
    medicalId: '24680',
    organDonation: 'Kidney',
    address: '654 Oak St, Anytown USA'
  },
  {
    name: 'Charlie Brown',
    medicalId: '36912',
    organDonation: 'Heart',
    address: '987 Elm St, Anytown USA'
  }
];

function Donor() {
  return (
    <div className="container-fluid vh-100" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '1rem' }}>
      <motion.h2
        style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        List of Donors
      </motion.h2>
      <motion.table
        style={{ border: '2px solid #333', borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr style={{ backgroundColor: '#333', color: '#fff' }}>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Name</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Medical ID</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Organ Donated</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((donor, index) => (
            <motion.tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#fff' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <td style={{ border: '2px solid #333', padding: '10px' }}>{donor.name}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{donor.medicalId}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{donor.organDonation}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{donor.address}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

export default Donor;
