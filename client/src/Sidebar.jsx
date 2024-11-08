import React from 'react';
import './Sidebar.css'

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <ul>
        <li><a href='https://www.indiacode.nic.in/bitstream/123456789/9460/1/a1988-59.pdf'>Vehicle Laws</a></li>
        <li><a href='https://nhrc.nic.in/sites/default/files/ChildrenRights.pdf'>Child Laws</a></li>
        <li><a href='https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/RTE_Section_wise_rationale_rev_0.pdf'>Educational Laws</a></li>
        <li><a href='https://highcourtchd.gov.in/hclscc/subpages/pdf_files/4.pdf'>Marriage Laws</a></li>
        <li><a href='https://labour.gov.in/sites/default/files/186_2019_ls_eng_0.pdf'>Safety Laws</a></li>
        <li>Labor Laws</li>
        <li>Tax Law</li>
        <li>Property Law</li>
      </ul>
      <div class='adhi'>Logout</div>
    </div >
    </>
  )
}

export default Sidebar