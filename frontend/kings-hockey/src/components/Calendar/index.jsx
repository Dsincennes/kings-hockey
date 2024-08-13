import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Calendar = () => {
    const [openMonths, setOpenMonths] = useState({
        'August 2024': true,
    });

    const toggleMonth = (month) => {
      setOpenMonths((prevOpenMonths) => ({
        ...prevOpenMonths,
        [month]: !prevOpenMonths[month],
      }));
    };
    
    const games = [
        {
          month: 'April 2024',
          matches: [
            { id: 1, home: 'Team Sexy', away: 'NE Bulldogs', result: 'Final', date: 'Mon, Apr 29', time: '9:15pm', location: 'Bell Sensplex' },
          ],
        },
        {
          month: 'May 2024',
          matches: [
            { id: 2, home: 'Shrew Crew', away: 'Team Sexy', result: 'Final', date: 'Mon, May 06', time: '10:00pm', location: 'Bell Sensplex' },
            { id: 3, home: 'Team Sexy', away: 'Oakhart', result: 'Final', date: 'Mon, May 13', time: '10:15pm', location: 'Bell Sensplex' },
            { id: 4, home: 'Team Sexy', away: 'Die Hards', result: 'Final', date: 'Tue, May 21', time: '8:15pm', location: 'Bell Sensplex' },
            { id: 5, home: 'Team Sexy', away: '7 Irons', result: 'Final', date: 'Mon, May 27', time: '8:15pm', location: 'Bell Sensplex' },
          ],
        },
        {
          month: 'June 2024',
          matches: [
            { id: 6, home: 'Team Sexy', away: 'Shrew Crew', result: 'Final', date: 'Mon, Jun 03', time: '9:30pm', location: 'Bell Sensplex' },
            { id: 7, home: 'Team Sexy', away: 'Warriors', result: 'Final', date: 'Sun, Jun 09', time: '8:15pm', location: 'Bell Sensplex' },
            { id: 8, home: 'Team Sexy', away: 'Die Hards', result: 'Final', date: 'Mon, Jun 17', time: '9:15pm', location: 'Bell Sensplex' },
            { id: 9, home: 'Team Sexy', away: 'Dangle dads', result: 'Final', date: 'Mon, Jun 24', time: '9:30pm', location: 'Bell Sensplex' },
            { id: 10, home: 'Team Sexy', away: 'Puckheads', result: 'Final', date: 'Thu, Jun 27', time: '8:30pm', location: 'Bell Sensplex' },
          ],
        },
        {
          month: 'July 2024',
          matches: [
            { id: 11, home: 'Team Sexy', away: 'Warriors', result: 'Final', date: 'Sun, Jul 07', time: '9:45pm', location: 'Bell Sensplex' },
            { id: 12, home: 'Team Sexy', away: 'Warriors', result: 'Final', date: 'Wed, Jul 10', time: '10:15pm', location: 'Bell Sensplex' },
            { id: 13, home: 'Team Sexy', away: 'Bastone 2.0', result: 'Final', date: 'Tue, Jul 16', time: '8:15pm', location: 'Bell Sensplex' },
            { id: 14, home: 'Team Sexy', away: 'Shrew Crew', result: 'Final', date: 'Sun, Jul 21', time: '8:15pm', location: 'Bell Sensplex' },
            { id: 15, home: 'Team Sexy', away: 'Scorpions', result: 'Final', date: 'Thu, Jul 25', time: '7:15pm', location: 'Bell Sensplex' },
            { id: 16, home: 'Team Sexy', away: 'Bastone 2.0', result: 'Final', date: 'Wed, Jul 31', time: '7:15pm', location: 'Bell Sensplex' },
          ],
        },
        {
          month: 'August 2024',
          matches: [
            { id: 17, home: 'Team Sexy', away: 'Dangle dads', result: 'Final', date: 'Tue, Aug 06', time: '10:00pm', location: 'Bell Sensplex' },
            { id: 18, home: 'Team Sexy', away: 'Shrew Crew', result: 'Final', date: 'Thu, Aug 15', time: '10:15pm', location: 'Bell Sensplex' },
          ],
        },
      ];

      
  return (
    <div className="calendar">
      {games.map((monthData, index) => (
        <div key={index} className="month">
          <h3 onClick={() => toggleMonth(monthData.month)} className="month-header">
            {monthData.month}
            <span className="toggle-icon">
              {openMonths[monthData.month] ? '-' : '+'}
            </span>
          </h3>
          {openMonths[monthData.month] && (
            <table>
              <thead>
                <tr>
                  <th>HOME</th>
                  <th>AWAY</th>
                  <th>W/L/T</th>
                  <th>DATE</th>
                  <th>TIME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {monthData.matches.map((match) => (
                  <tr key={match.id}>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.home}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.away}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.result}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.date}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.time}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/game/${match.id}`} className="game-link">
                        {match.location}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
