import React, { useState } from "react";
import { data } from "./data";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filters() {
    
    const [contacts] = useState(data);
    const [search, setSearch] = useState('');

    return (

        <div>
            <Container>
                <h1 className="text-center mt-4">Contact Finder</h1>
                <Form>
                    <InputGroup>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Contact" />
                    </InputGroup>
                </Form>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search);
                        }) //includes used to check it typed characters is in or not in firstname
                        .map((item) => (

                        <>

                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>

                        </>

                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>

    )

}
