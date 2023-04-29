import React from 'react';
import { motion } from 'framer-motion';

const needyData = [  {    name: 'John Doe',    medicalId: '123456',    organReq: 'Liver',    address: '123 Main St, Anytown USA'  },  {    name: 'Jane Smith',    medicalId: '654321',    organReq: 'Kidney',    address: '456 Oak St, Anytown USA'  },  {    name: 'Bob Johnson',    medicalId: '789123',    organReq: 'Heart',    address: '789 Elm St, Anytown USA'  }];

function Needy() {
  return (
    <div className="container-fluid vh-100"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#e03fd8', padding: '2rem', borderRadius: '1rem' }}>
      <motion.h2
        style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        List of Needy People
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
            <th style={{ border: '2px solid #333', padding: '10px' }}>Organ Requested</th>
            <th style={{ border: '2px solid #333', padding: '10px' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {needyData.map((needyPerson, index) => (
            <motion.tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#fff' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <td style={{ border: '2px solid #333', padding: '10px' }}>{needyPerson.name}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{needyPerson.medicalId}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{needyPerson.organReq}</td>
              <td style={{ border: '2px solid #333', padding: '10px' }}>{needyPerson.address}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

export default Needy;
