'use client';

import React from 'react';
import Link from 'next/link';
import { TextField, IconButton } from '@mui/material';
import { Twitter, Facebook, Instagram, Google, YouTube, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#fff', padding: '40px 20px', borderTop: '1px solid #e0e0e0', marginTop: '50px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: 'auto' }}>
        
        {/* Section 1 */}
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h4>Material Kit PRO</h4>
          <p style={{ color: '#999', lineHeight: 1.5 }}>
            Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ flex: '1', minWidth: '120px', marginBottom: '20px' }}>
          <h4>About</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Presentation</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div style={{ flex: '1', minWidth: '120px', marginBottom: '20px' }}>
          <h4>Market</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#">Sales FAQ</Link></li>
            <li><Link href="#">How to Register</Link></li>
            <li><Link href="#">Sell Goods</Link></li>
            <li><Link href="#">Receive Payment</Link></li>
            <li><Link href="#">Transactions Issues</Link></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div style={{ flex: '1', minWidth: '120px', marginBottom: '20px' }}>
          <h4>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#">Transactions FAQ</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Licenses</Link></li>
          </ul>
        </div>

        {/* Section 5 */}
        <div style={{ flex: '1', minWidth: '250px', marginBottom: '20px' }}>
          <h4>Subscribe to Newsletter</h4>
          <p style={{ color: '#999', lineHeight: 1.5 }}>
            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <TextField
              variant="standard"
              placeholder="Your Email..."
              InputProps={{
                disableUnderline: true,
                style: { borderBottom: '1px solid #ccc', flex: 1 },
              }}
            />
            <IconButton sx={{ backgroundColor: '#9c27b0', color: '#fff', marginLeft: '8px' }}>
              <Email />
            </IconButton>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #e0e0e0', margin: '30px 0' }} />

      {/* Bottom Social Links */}
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <IconButton href="#" size="large"><Twitter sx={{ color: '#55acee' }} /></IconButton>
        <IconButton href="#" size="large"><Facebook sx={{ color: '#3b5998' }} /></IconButton>
        <IconButton href="#" size="large"><Instagram sx={{ color: '#ea4c89' }} /></IconButton>
        <IconButton href="#" size="large"><Google sx={{ color: '#dd4b39' }} /></IconButton>
        <IconButton href="#" size="large"><YouTube sx={{ color: '#ff0000' }} /></IconButton>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', color: '#999', fontSize: '14px', marginTop: '10px' }}>
        Copyright © {new Date().getFullYear()} <span style={{ color: '#9c27b0' }}>Creative Tim</span> All Rights Reserved.
      </div>

    </footer>
  );
}

