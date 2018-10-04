import React, { Component } from 'react';


const sorts = {
    type: [
        {
            name: 'comedy'
        },
        {
            name: 'drama'
        },
        {
            name: 'thriller'
        }
    ],
    country: [
        {
            name: 'usa'
        },
        {
            name: 'germany'
        },
        {
            name: 'france'
        }
    ],
    year: [
        {
            name: '2018'
        },
        {
            name: '2000'
        },
        {
            name: '1990'
        }
    ]

};
const sortByType = sorts.type.map(sort =>
    <li>{sort.name}</li>);
const sortByCountry = sorts.country.map(sort =>
    <li>{sort.name}</li>);
const sortByYear = sorts.year.map(sort =>
    <li>{sort.name}</li>);
export class MovieSorting extends Component {
    render() {
      
      return (
          <div className="movieSorting">
            <h1>MovieSorting</h1>
              <div>
                  <div>
                      <div>Type</div>
                      <ul>
                          {sortByType}
                      </ul>
                  </div>
                  <div>
                      <div>Country</div>
                      <ul>
                          {sortByCountry}
                      </ul>
                  </div>
                  <div>
                      <div>Year</div>
                      <ul>
                          {sortByYear}
                      </ul>
                  </div>
              </div>
          </div>
      );
    }
}