import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
  <footer className="iq-footer">
        <div className="container-fluid">
            <div className="card" id="footer">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                <li className="list-inline-item"><Link href="terms-of-service.html">Terms of Use</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <span className="mr-1">
                                <script>document.write(new Date().getFullYear())</script>©
                            </span> <Link href="/" className="" id="footer_text">QuickCart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
