import React from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { Link } from 'react-router-dom'

// const clickDelete = (id) => {
//     confirmAlert({
//       title: 'Confirm',
//       message: 'Are you sure you want to delete this booking?',
//       buttons: [
//         {
//           label: 'Delete',
//           onClick: () => alert('Delete')
//         },
//         {
//           label: 'Cancel',
//           onClick: () => console.log()
//         }
//       ]
//     })
//   }


const Records = (props) => {

  console.log(props.suburbs)

  const setService = (service_id) => {
      let service = props.services.find(element => service_id == element.id)
      if (service == undefined) {
        return ""
      } else {
        return service.service_name
      }
  }

  const setSuburb = (suburb_id) => {
    let suburb = props.suburbs.find(element => suburb_id == element.id)
    if (suburb == undefined) {
      return ""
    } else {
      return suburb.name
    }
  }

  const handleClick = (id) => {
    props.deleteRecord(id)
  }


    return (
        <>
        <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Customer</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Service</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {props.records.map((data, index) => (
            <tr key={data.id}>
                  <td>
                      <p>{data.booking_date}</p>
                  </td>
                  <td>
                      <Link to={`/admin/bookings/${data.id}`}>
                          <p>{data.first_name} {data.last_name}</p>
                      </Link>
                  </td>
                  <td>
                      <p>{data.address}, {setSuburb(data.suburb_id)}</p>
                  </td>
                  <td>
                      <p>{data.phonenumber}</p>
                  </td>
                  <td>
                      <p>{data.email}</p>
                  </td>
                  <td>
                      <p>{setService(data.service_id)}</p>
                  </td>
                  <td>
                      <p>{data.notes}</p>
                  </td>
                  <td>
                      <Link to={`/admin/bookings/${data.id}/edit`}>
                        <button>Edit</button>
                      </Link>
                  </td>
                  <td>
                      <button id="delete" onClick={() => handleClick(data.id)}>Delete</button>
                  </td>
              </tr>
          ))}
        </tbody>
    </table>
    </>
    )
  }

export default Records