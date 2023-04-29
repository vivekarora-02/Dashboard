import React from 'react';
import { motion } from 'framer-motion';

const hospitalData = [  {    name: 'General Hospital',    address: '123 Main St, Anytown USA',    phone: '555-123-4567',    email: 'info@generalhospital.com'  },  {    name: 'Community Hospital',    address: '456 Oak St, Anytown USA',    phone: '555-234-5678',    email: 'info@communityhospital.com'  },  {    name: 'City Hospital',    address: '789 Elm St, Anytown USA',    phone: '555-345-6789',    email: 'info@cityhospital.com'  }];

function Hospital() {
  return (
    <div className="container-fluid vh-100" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '1rem' }}>
      <motion.h2
        style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        List of Hospitals
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
            <th style={{ border: '2px solid #333', padding: '10px' }}>Address</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Phone</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {hospitalData.map((hospital, index) => (
            <motion.tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#fff' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <td style={{ border: '2px solid #333', padding: '10px' }}>{hospital.name}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{hospital.address}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{hospital.phone}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{hospital.email}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

export default Hospital;
