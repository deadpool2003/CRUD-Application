import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popup(data) {

    const update = ()=>{
        fetch(`https://67d7ed1f9d5e3a10152c9bcc.mockapi.io/api/demo-crud/Details/${data.d.id}`, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data.d)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            alert("updated");
            data.setStatus(!data.status);
        }).catch(error => {
            console.log(error)
        })
        data.boxHide();
    }

    const add = ()=>{
          fetch('https://67d7ed1f9d5e3a10152c9bcc.mockapi.io/api/demo-crud/Details', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data.d)
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
          }).then(task => {
            console.log(task)
            alert("Details Added.....!")  
            data.setStatus(!data.status);
          }).catch(error => {
            console.log(error)
          })
        data.boxHide();
    }
    

  return (
    <>
        <Modal show={data.boxShow} onHide={data.boxHide}>
            <Modal.Header closeButton>
            <Modal.Title>{data.d.id? "Edit Details ✍️":"Add New Detail 📝"} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={(e)=>e.preventDefault()}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        defaultValue={data.d.name}
                        onChange={(i)=>data.upd({...data.d,name:i.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                        defaultValue={data.d.emailid}
                        onChange={(i)=>data.upd({...data.d,emailid:i.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Qualification"
                        defaultValue={data.d.qualification}
                        onChange={(i)=>data.upd({...data.d,qualification:i.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Location"
                        defaultValue={data.d.location}
                        onChange={(i)=>data.upd({...data.d,location:i.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter Your Mobile Number"
                        defaultValue={data.d.phoneNo}
                        onChange={(i)=>data.upd({...data.d,phoneNo:i.target.value})}
                    />
                </Form.Group>
                
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={data.boxHide}>
                    Close
                </Button>
                {data.d.id ? 
                    <>
                        <Button variant="primary" onClick={update}>
                            Save Changes
                        </Button>
                    </>:
                    <>
                        <Button variant="success" onClick={add}>
                            Add Details
                        </Button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default Popup;