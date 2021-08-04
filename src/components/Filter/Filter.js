import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    Find contact by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
