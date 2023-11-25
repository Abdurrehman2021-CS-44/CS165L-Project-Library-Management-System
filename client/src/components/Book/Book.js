import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/login.css';

import edit from '../../assets/edit.png';
import del from '../../assets/delete.png';
import search from '../../assets/search.png';
import book1 from '../../assets/books/book60.jpg';
import book2 from '../../assets/books/book61.jpg';
import book3 from '../../assets/books/book62.jpg';
import book4 from '../../assets/books/book63.jpg';
import book5 from '../../assets/books/book64.jpg';
import book6 from '../../assets/books/book65.jpg';


const Book = () => {
  return (
    <div>
      <div className="table">
        <div className="table_header">
          <h1>Books</h1>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." />
            <img src={search} alt="Search" />
          </div>
          <div className="add_record">
            <label for="add-record" className="add_record-btn" title="Add Record"></label>
            <a href="#"> </a>
          </div>
          <div className="export_file">
            <label for="export-file" className="export_file-btn" title="Export Data"></label>
            <input type="checkbox" id="export-file" />
            <div className="export_file-options">
              <label>Export As &nbsp; &#10140;</label>
              <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
              <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt="" /></label>
              <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt="" /></label>
              <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt="" /></label>
            </div>
          </div>
        </div>
        <div className="table_body">
          <table>
            <thead>
              <tr>
                <th> ISBN <span className="icon-arrow">&UpArrow;</span></th>
                <th> Title <span className="icon-arrow">&UpArrow;</span></th>
                <th> Author <span className="icon-arrow">&UpArrow;</span></th>
                <th> Edition <span className="icon-arrow">&UpArrow;</span></th>
                <th> Category <span className="icon-arrow">&UpArrow;</span></th>
                <th> Price <span className="icon-arrow">&UpArrow;</span></th>
                <th> Publisher <span className="icon-arrow">&UpArrow;</span></th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td> <img src={book1} alt="" />Zinzu</td>
                <td> Ayesha </td>
                <td> 1st </td>
                <td>Comedy</td>
                <td> <strong> $128.90 </strong></td>
                <td> UrduTimes </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td><img src={book2} alt="" /> Jeet</td>
                <td> Ayesha </td>
                <td> 5th </td>
                <td>Education</td>
                <td> <strong>$5350.50</strong> </td>
                <td> Jaang </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
              <tr>
                <td> 3</td>
                <td><img src={book3} alt="" /> Sonal</td>
                <td> Ayesha </td>
                <td> 2nd </td>
                <td>Funny </td>
                <td> <strong>$210.40</strong> </td>
                <td> Caravaan </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
              <tr>
                <td> 4</td>
                <td><img src={book4} alt="" /> Alson</td>
                <td> Ayesha</td>
                <td> 1st </td>
                <td> Horror </td>
                <td> <strong>$149.70</strong> </td>
                <td> Kaawish </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
              <tr>
                <td> 5</td>
                <td><img src={book5} alt="" /> Sarita</td>
                <td> Ayesha </td>
                <td> 4th </td>
                <td> Romantic </td>
                <td> <strong>$399.99</strong> </td>
                <td> Dastaan </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
              <tr>
                <td> 6</td>
                <td><img src={book6} alt="" /> Sarita</td>
                <td> Ayesha </td>
                <td> 2nd </td>
                <td>Literature </td>
                <td> <strong>$399.99</strong> </td>
                <td> Caravaan </td>
                <td>
                  <div className="action">
                    <img src={edit} />
                    <img src={del} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Book

