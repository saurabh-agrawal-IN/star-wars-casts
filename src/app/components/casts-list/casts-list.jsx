import React from 'react';
import Axios from 'axios';
import '../styles/casts-list.css';
import { FIELD_NAMES } from '../../common/constants';

const CastsList = () => {
  const [casts, setCasts] = React.useState([]);
  
  React.useEffect(() => {
    Axios.get('https://swapi.dev/api/people').then(({ data }) => {
      console.log('here1');
      if (!casts.length) {
        console.log('here2');
        setCasts(data.results);
      }
    });
  }, [casts.length]);
  
  const renderTableHeader = React.useCallback(() => {
    const keys = Object.keys(FIELD_NAMES);
    return (
      <thead>
        <tr>
          {keys.map((key) => <th>{FIELD_NAMES[key]}</th>)}
        </tr>
      </thead>
    );
  }, []);
  
  const renderMultipleValues = React.useCallback((values) => (
    <>
      {values.map((value) => value + '\r\n')}
    </>
  ));
  
  const renderCastRow = React.useCallback(({
    name,
    gender,
    mass,
    height,
    birth_year,
    eye_color,
    hair_color,
    skin_color,
    films,
    starships,
    vehicles,
    created
  }) => (
    <tr key={`${created}`}>
      <td>{ name }</td>
      <td>{ gender }</td>
      <td>{ mass }</td>
      <td>{ height }</td>
      <td>{ birth_year }</td>
      <td>{ eye_color }</td>
      <td>{ hair_color }</td>
      <td>{ skin_color }</td>
      <td>{ renderMultipleValues(films) }</td>
      <td>{ renderMultipleValues(starships) }</td>
      <td>{ renderMultipleValues(vehicles) }</td>
    </tr>
  ));
  
  const renderTableBody = React.useCallback(() => (
    <tbody>
      {casts.map((cast) => renderCastRow(cast))}
    </tbody>
  ), [casts, renderCastRow]);
  
  return (
    <table>
      { renderTableHeader() }
      { renderTableBody() }
    </table>
  );
}

export default CastsList;