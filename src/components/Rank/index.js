import { Table } from "@material-ui/core";
import React from "react";
import styles from "./style.module.css";

const Rank = ({
  cpm,
  wpm,
  lastScore,
  duration,
  accuracy,
  errorIndex,
}) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.rankHeading}>Top Score</h1>
      <div className={styles.scoreTable}>
        <Table >

          <th>
            <span className={styles.rank}>Rank</span>
          </th>

          <th>
            <span className={styles.rank}>Name</span>
          </th>
          <th>
            <span className={styles.rank}>Id</span>
          </th>

          <th>
            <span className={styles.rank}>Score</span>
          </th>


          <tr><td>
            <span className={styles.rank} role="img">🏆1</span>
          </td>

            <td>
              <span className={styles.rank}>Eddy</span>
            </td>
            <td>
              <span className={styles.rank}>sad1a2sd1aa1</span>
            </td>

            <td>
              <span className={styles.rank}>89</span>
            </td></tr>



          <tr><td>
            <span className={styles.rank} role="img">🏆2</span>
          </td>

            <td>
              <span className={styles.rank}>Mark</span>
            </td>
            <td>
              <span className={styles.rank}>sad1a2s234a1</span>
            </td>

            <td>
              <span className={styles.rank}>74</span>
            </td></tr>


          <tr><td>
            <span className={styles.rank} role="img">🏆3</span>
          </td>

            <td>
              <span className={styles.rank}>Mario</span>
            </td>
            <td>
              <span className={styles.rank}>sad1a2s2263d</span>
            </td>

            <td>
              <span className={styles.rank}>66</span>
            </td></tr>
        </Table>
      </div>



    </div>
  );
};

export default Rank;
