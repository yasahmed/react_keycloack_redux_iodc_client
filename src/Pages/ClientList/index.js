import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";

export default class ClientListPage extends Component {
  render() {
    const { clients, actions } = this.props;

    const tableOfClients =
      !clients || clients.length === 0 ? (
        <b>No Client found !</b>
      ) : (
        <div>
          <h1>Client list</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.age}</td>
                  <td>
                    <a
                      onClick={() => actions.removeClient(client.id)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      Delete ??!
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    return tableOfClients;
  }
}
