import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TableComponent(props) 
{
    const [data, setData] = useState(null);

    let api = () =>
    {
        fetch('https://67d7ed1f9d5e3a10152c9bcc.mockapi.io/api/demo-crud/Details', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
          }).then(tasks => {
            // setData(tasks.reverse());
            setData(tasks);
          }).catch(error => {
            console.log(error)
          })
    }

    const del = (id) =>{
        fetch(`https://67d7ed1f9d5e3a10152c9bcc.mockapi.io/api/demo-crud/Details/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            alert("deleted........!")
            props.setStatus(!props.status);
        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(()=>
    {
        api();
    }, [props.status])

    let temp = {
        name:null,
        emailid:null,
        location:null,
        phoneNo:null,
        qualification:null
    }

    return (
        <>
            <Button className='mb-3' variant='warning' onClick={()=>props.boxVis(temp)}>Add Details</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Qualification</th>
                    <th>Location</th>
                    <th>Mobile No.</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {data?.map((d,i)=>
                        {
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.emailid}</td>
                                    <td>{d.qualification}</td>
                                    <td>{d.location}</td>
                                    <td>{d.phoneNo}</td>
                                    <td>
                                        <Button variant="success" className='me-3' onClick={()=>props.boxVis(d)}>Edit</Button>
                                        <Button variant="danger" onClick={()=>del(d.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </>
  );
}

export default TableComponent;