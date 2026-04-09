import React, { useState } from 'react'

const Tab = ({activeTab, setActiveTab}) => {
    
  return (
    <div>
        <div role="tablist" className="tabs tabs-box justify-center m-20">
  <a
          role="tab"
          onClick={() => setActiveTab("Products")}
          className={`tab rounded-full w-40 ${activeTab === "Products" ? "tab-active" : ""}`}
        >
          Products
        </a>

        <a
          role="tab"
          onClick={() => setActiveTab("Cart")}
          className={`tab rounded-full w-40 ${activeTab === "Cart" ? "tab-active" : ""}`}
        >
          Cart
        </a>
</div>
</div>
  )
}

export default Tab