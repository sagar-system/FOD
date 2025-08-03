import React from 'react'
import './lastpage.css'

export default function LastPage() {
  return (
    <div className='footer-container'>
      <table className='footer-table'>
        <tr className='footer-header-row'>
          <th className='footer-header'>THE CAR Hub</th>
          <th className='footer-header'>COMPANY</th>
          <th className='footer-header'>NEWSLETTER</th>
        </tr>
        <tr className='footer-content-row'>
          <td className='footer-description'>
            <pre className='footer-text'>
              Your trusted classic & used car dealer! Specializing in vintage gems and affordable rides.
              we bring character to every drive. With honest pricing, quality checks, and personalized service,
              we turn your car dreams into reality.
            </pre>
          </td>
          <td className='footer-links'>
            <ol className='links-list'>
              <li className='link-item'>Home</li>
              <li className='link-item'>About us</li>
              <li className='link-item'>Contact us</li>
              <li className='link-item'>Privacy Policy</li>
            </ol>
          </td>
          <td className='footer-newsletter'>
            <ul className='newsletter-list'>
              <li className='newsletter-text-item'>
                <pre className='newsletter-text'>
                  The latest news, articles, and resources, sent to your inbox weekly
                </pre>
              </li>
              <li className='newsletter-form-item'>
                <input 
                  type="search" 
                  placeholder='Your email' 
                  className='newsletter-input' 
                />
                <button className='submit-btn'>Submit</button>
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <h4 className='copyright-text'>
        Copyright 2025 @ MERNSTACK. All Right Reserved.
      </h4>
    </div>
  )
}