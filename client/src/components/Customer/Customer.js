import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../Customer/customer.css';

import edit from '../../assets/edit.png';
import del from '../../assets/delete.png';
import search from '../../assets/searchHeader.png';
import csv from '../../assets/csv.png';
import pdf from '../../assets/pdf.png';
import excel from '../../assets/excel.png';
import json from '../../assets/json.png';

const Customer = () => {

  const [customer, setCustomer] = useState();


  useEffect(() => {
    axios.get('/customer')
      .then((data) => {
        setCustomer(data.data.data);
      })
      .catch(error => console.log(error));
  }, [])

  // ============================================================== //

  // ============================================================== //

  //#region

  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filtered = customer.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.CNIC.toLowerCase().includes(value) ||
        item.address.toLowerCase().includes(value) ||
        item.phone.toLowerCase().includes(value)
      );

    });
    setCustomer(filtered);
  };

  const handleHeadingClick = (column) => {
    const isAscending = sortOrder === 'asc';
    const sorted = [...customer].sort((a, b) => {
      const firstRow = a[Object.keys(a)[column]];
      const secondRow = b[Object.keys(b)[column]];
      return isAscending ? (firstRow > secondRow ? 1 : -1) : firstRow < secondRow ? 1 : -1;
    });

    setCustomer(sorted);
    setSortOrder(isAscending ? 'desc' : 'asc');


    const thElements = document.querySelectorAll('th');
    thElements.forEach((th, index) => {
      th.classList.remove('asc', 'desc');
      if (index === column) {
        th.classList.add(isAscending ? 'asc' : 'desc');
      }
    });
    // ================================== 
    const table_headings = document.querySelectorAll('thead th');
    table_headings.forEach((head, i) => {
      let sort_asc = true;
      head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        // sortTable(i, sort_asc);
      }
    })
  };

  //#endregion

  // ============================================================== //

  return (
    <div>
      <div className="table_frame">
        <div className="table">
          <div className="table_header">
            <h1>Customer</h1>
            <div className="input-group">
              <input
                type="search"
                placeholder="Search Customer"
                onChange={handleInputChange}
                value={searchValue}
                className="search-input"
              />
              <img src={search} alt="Search" />
            </div>
            <div className="export_file">
              <label for="export-file" className="export_file-btn" title="Export Data"></label>
              <input type="checkbox" id="export-file" />
              <div className="export_file-options">
                <label>Export As &nbsp; &#10140;</label>
                <label for="export-file" id="toPDF">PDF <img src={pdf} alt="" /></label>
                <label for="export-file" id="toJSON">JSON <img src={json} alt="" /></label>
                <label for="export-file" id="toCSV">CSV <img src={csv} alt="" /></label>
                <label for="export-file" id="toEXCEL">EXCEL <img src={excel} alt="" /></label>
              </div>
            </div>
          </div>
          <div className="table_body">
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleHeadingClick(0)}> Name <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(1)}> CNIC <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(2)}> Address <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(3)}> Phone Number <span className="icon-arrow">&uarr;</span></th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {
                  customer?.map((customer, index) => {
                    return <tr key={index}>
                      <td> {customer.name} </td>
                      <td> {customer.CNIC} </td>
                      <td> {customer.address} </td>
                      <td> {customer.phone} </td>
                      <td>
                        <div className="action">
                          <img src={del} />
                        </div>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Customer
