import React from 'react';
import Axios from 'axios';
import '../styles/casts-list.css';
import { FIELD_NAMES } from '../../common/constants';
import AppContext from '../../common/context/app-context';
import { sortRecords } from '../../common/utils/utils';

const CastsList = () => {
  const [casts, setCasts] = React.useState([]);
  const { searchQuery, sortBy } = React.useContext(AppContext);
  
  /**
   * the effect to be called first time when component is mounted.
   * fetches the casts' list and renders.
   */
  React.useEffect(() => {
    Axios.get('https://swapi.dev/api/people').then(({ data }) => {
      setCasts(sortRecords(sortBy, data.results));
    });
  }, []);
  
  /**
   * the effect to be called when something is typed in search bar.
   * fetches the search results and renders.
   */
  React.useEffect(() => {
    Axios.get(`https://swapi.dev/api/people?search=${searchQuery}`).then(({ data }) => {
      setCasts(sortRecords(sortBy, data.results));
    });
  }, [sortBy, searchQuery]);
  
  /**
   * the effect to be called when sorting field is changed by user.
   * sorts the records and renders.
   */
  React.useEffect(() => {
    setCasts(sortRecords(sortBy, casts));
  }, [sortBy]);
  
  /**
   * A function to render the table header.
   */
  const renderTableHeader = React.useCallback(() => {
    const keys = Object.keys(FIELD_NAMES);
    return (
      <thead>
        <tr>
          {keys.map((key) => <th key={`${key}`}>{FIELD_NAMES[key]}</th>)}
        </tr>
      </thead>
    );
  }, []);
  
  /**
   * A function to render the multiple values in a table cell on
   * a new line.
   */
  const renderMultipleValues = React.useCallback((values) => (
    <>
      {values.map((value) => value + '\r\n')}
    </>
  ), []);
  
  /**
   * A function to render a table row with Data.
   */
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
  
  /**
   * A function to render the table body
   */
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