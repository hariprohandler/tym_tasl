import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';



function List(props) {
  return (
    <div>
      <Table responsive>
        <tbody>
          {props.data.map(function (item) {
            return <tr key={item.id}>
              <td>{item.name}</td>
              <td><Button className="btn btn-primary" onClick={(e)=>{props.addMethod(item)}}>Add</Button></td>

              <td>
                { props.showRemove  == "1"?
                  <Button className="btn btn-danger" onClick={(e)=>{props.removeMethod(item)}}>Remove</Button> : ''
                }
                </td>
            </tr>
          })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default List;
