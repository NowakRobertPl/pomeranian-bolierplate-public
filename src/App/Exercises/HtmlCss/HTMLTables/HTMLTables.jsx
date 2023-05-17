import './styles.css';

export function Tables() {
  return(
  <div className="table">
     <table>
      <thead>
        <tr>
          <th colspan="5">Material tests.</th>
        </tr>
      </thead>
      <tbody>
        <tr className="materials">
          <td>Plastic</td>
          <td>Acetone</td>
          <td>Flame test</td>
          <td>Heat</td>
          <td>Crease color</td>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
