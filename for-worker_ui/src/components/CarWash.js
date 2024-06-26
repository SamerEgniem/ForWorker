import React from 'react';
import Footer from './Footer'
import Header from './Header'
import './CarWash.css'; // Create this file for CSS styles
import johnDoePic from './assets/People/1.jpeg';
import janeSmithPic from './assets/People/2.jpeg';
import AliceJohnsonPic from './assets/People/3.jpeg';
import RobertBrownPic from './assets/People/4.jpeg';
import MaryDavisPic from './assets/People/5.jpeg';
import JamesWilsonPic from './assets/People/6.jpeg';
import PatriciaTaylorPic from './assets/People/7.jpeg';
import MichaelMoorePic from './assets/People/8.jpeg';
import LindaAndersonPic from './assets/People/9.jpeg';
import DavidThomasPic from './assets/People/10.jpeg';
const employees = [
  { id: 1, name: 'John Doe', pic: johnDoePic, bio: 'A skilled developer.', rating: 4.8 },
  { id: 2, name: 'Jane Smith', pic: janeSmithPic, bio: 'A creative designer.', rating: 4.7 },
  { id: 3, name: 'Alice Johnson', pic: AliceJohnsonPic, bio: 'A dedicated project manager.', rating: 4.6 },
  { id: 4, name: 'Robert Brown', pic: RobertBrownPic, bio: 'An experienced tester.', rating: 4.5 },
  { id: 5, name: 'Mary Davis', pic: MaryDavisPic, bio: 'An excellent writer.', rating: 4.4 },
  { id: 6, name: 'James Wilson', pic: JamesWilsonPic, bio: 'A talented marketer.', rating: 4.3 },
  { id: 7, name: 'Patricia Taylor', pic: PatriciaTaylorPic, bio: 'An innovative engineer.', rating: 4.2 },
  { id: 8, name: 'Michael Moore', pic: MichaelMoorePic, bio: 'A visionary leader.', rating: 4.1 },
  { id: 9, name: 'Linda Anderson', pic: LindaAndersonPic, bio: 'A skilled accountant.', rating: 4.0 },
  { id: 10, name: 'David Thomas', pic: DavidThomasPic, bio: 'A proficient HR specialist.', rating: 3.9 },
];


function CarWash() {
  // Sort employees by rating, descending
  const sortedEmployees = employees.sort((a, b) => b.rating - a.rating);

  return (
    <>
    <Header/>
    <div className="employee-table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Details</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map(employee => (
            <tr key={employee.id}>
              <td className="employee-info">
                <img src={employee.pic} alt={employee.name} className="employee-pic" />
                <div className="employee-name">{employee.name}</div>
              </td>
              <td className="employee-bio">{employee.bio}</td>
              <td className="employee-rating">
                <strong>{employee.rating}</strong> ⭐
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
}

export default CarWash;
