'use client';

import React from 'react';
import Link from 'next/link';
import { TextField, IconButton, Box } from '@mui/material';
import { Twitter, Facebook, Instagram, Google, YouTube, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#fff', padding: '40px 20px', borderTop: '1px solid #e0e0e0', marginTop: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        {/* Section 1 */}
        <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4>Private Server App</h4>
          <p style={{ color: '#999', lineHeight: 1.5 }}>
            Probably the best Private Server Platform! We know you've been waiting for it, so don't be shy!
          </p>
        </Box>

        {/* Section 2 */}
        <Box sx={{ flex: '1 1 120px', minWidth: '120px' }}>
          <h4>About</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/presentation">Presentation</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </Box>

        {/* Section 3 */}
        <Box sx={{ flex: '1 1 120px', minWidth: '120px' }}>
          <h4>Market</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/sales-faq">Sales FAQ</Link></li>
            <li><Link href="/register">How to Register</Link></li>
            <li><Link href="/sell-goods">Sell Goods</Link></li>
            <li><Link href="/receive-payment">Receive Payment</Link></li>
            <li><Link href="/transaction-issues">Transactions Issues</Link></li>
          </ul>
        </Box>

        {/* Section 4 */}
        <Box sx={{ flex: '1 1 120px', minWidth: '120px' }}>
          <h4>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/transactions-faq">Transactions FAQ</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/licenses">Licenses</Link></li>
          </ul>
        </Box>

        {/* Section 5 */}
        <Box sx={{ flex: '1 1 250px', minWidth: '250px' }}>
          <h4>Subscribe to Newsletter</h4>
          <p style={{ color: '#999', lineHeight: 1.5 }}>
            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about that.
          </p>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <TextField
              variant="standard"
              placeholder="Your Email..."
              InputProps={{
                disableUnderline: true,
                sx: { borderBottom: '1px solid #ccc', flex: 1 },
              }}
            />
            <IconButton sx={{ backgroundColor: '#9c27b0', color: '#fff', marginLeft: '8px' }}>
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', margin: '30px 0' }} />

      {/* Bottom Social Links */}
      <Box sx={{ textAlign: 'center', paddingBottom: '20px', display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Link href="https://twitter.com" passHref legacyBehavior>
          <IconButton component="a" target="_blank"><Twitter sx={{ color: '#55acee' }} /></IconButton>
        </Link>
        <Link href="https://facebook.com" passHref legacyBehavior>
          <IconButton component="a" target="_blank"><Facebook sx={{ color: '#3b5998' }} /></IconButton>
        </Link>
        <Link href="https://instagram.com" passHref legacyBehavior>
          <IconButton component="a" target="_blank"><Instagram sx={{ color: '#ea4c89' }} /></IconButton>
        </Link>
        <Link href="https://google.com" passHref legacyBehavior>
          <IconButton component="a" target="_blank"><Google sx={{ color: '#dd4b39' }} /></IconButton>
        </Link>
        <Link href="https://youtube.com" passHref legacyBehavior>
          <IconButton component="a" target="_blank"><YouTube sx={{ color: '#ff0000' }} /></IconButton>
        </Link>
      </Box>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', color: '#999', fontSize: '14px', marginTop: '10px' }}>
        © {new Date().getFullYear()} <span style={{ color: '#9c27b0' }}>Private Server App</span>. All Rights Reserved.
      </Box>
    </footer>
  );
}