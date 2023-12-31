import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Book/book.css';

import edit from '../../assets/edit.png';
import del from '../../assets/delete.png';
import search from '../../assets/searchHeader.png';
import csv from '../../assets/csv.png';
import pdf from '../../assets/pdf.png';
import excel from '../../assets/excel.png';
import json from '../../assets/json.png';

const Book = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState();
  // ============================================================== //

  //#region

  // const [books, setBooks] = useState(book);
  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filtered = book.filter((item) => {
      return (
        item.ISBN.toLowerCase().includes(value) ||
        item.title.toLowerCase().includes(value) ||
        item.author.toLowerCase().includes(value) ||
        // item.edition.toLowerCase().includes(value) ||
        // item.category_id.toLowerCase().includes(value) ||
        // item.price.toLowerCase().includes(value) ||
        item.publisher.toLowerCase().includes(value)
        // item.img_path.toLowerCase().includes(value)
      );

    });
    setBook(filtered);
  };

  const handleHeadingClick = (column) => {
    const isAscending = sortOrder === 'asc';
    const sorted = [...book].sort((a, b) => {
      const firstRow = a[Object.keys(a)[column]];
      const secondRow = b[Object.keys(b)[column]];
      return isAscending ? (firstRow > secondRow ? 1 : -1) : firstRow < secondRow ? 1 : -1;
    });

    setBook(sorted);
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

  // ============================================================== //

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('/book', {
  //         method: 'GET',
  //       });
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok.');
  //       }
  //       const data = await res.json();
  //       setBook(data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  useEffect(() => {
    axios.get('/book')
        .then((data) => {
            setBook(data.data.data);
        })
        .catch(error => console.log(error));
}, [])


  return (
    <div>
      <div className="table_frame">
        <div className="table">
          <div className="table_header">
            <h1>Books</h1>
            <div className="input-group">
              <input
                type="search"
                placeholder="Search book"
                onChange={handleInputChange}
                value={searchValue}
                className="search-input"
              />
              <img src={search} alt="Search" />
            </div>
            <div className="add_record">
              <Link to="/createBook"><label for="add-record" className="add_record-btn" title="Add Record"></label></Link>
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
                  <th onClick={() => handleHeadingClick(0)}> ISBN <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(1)}> Title <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(2)}> Author <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(3)}> Edition <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(4)}> Price <span className="icon-arrow">&uarr;</span></th>
                  <th onClick={() => handleHeadingClick(5)}> Publisher <span className="icon-arrow">&uarr;</span></th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {
                  book?.map((book, index) => {
                    return <tr key={index}>
                      <td> {book.ISBN} </td>
                      <td><img src={book.img_path} alt="" /> {book.title}</td>
                      <td> {book.author} </td>
                      <td> {book.edition} </td>
                      <td> <strong>${book.price}</strong> </td>
                      <td> {book.publisher} </td>
                      <td>
                        <div className="action">
                          <Link to="/updateBook"><img src={edit} /></Link>
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

export default Book

