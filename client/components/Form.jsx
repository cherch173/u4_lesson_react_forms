// Step 1.1 IMPORT useState
import { useState } from "react";
import axios from "axios";

// Step 1.2 declare FORM and initialState
const Form = ({getIssues}) => {
    const initialState = {
        issueType: 'outage',
        subject: '',
        message: '',
      }
      // Step 1.3 use STATE of FORM
      const [formState, setFormState] = useState(initialState)
      
      // Step 3 -- code out handleSubmit
      // and add onSubmit to FORM
      const handleSubmit = async (event) => {
        event.preventDefault()
        // Step 5  -- Swap console.log for API POST Request
        await axios.post('http://localhost:3001/issues', formState)
        setFormState(initialState)
        // Step 5.2 -- invoke getIssues
        getIssues()
      }

      // Step 4 -- code out handleChange

      const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
      }
      
      // Part 3.2 add an onChange to each INPUT and
      // Part 3.3 update each ELEMENT'S VALUE to its PROP
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="issueType">Type of Issue:</label>
          <select id="issueType" onChange={handleChange} value={formState.issueType}>
            <option value="outage">Service Outage</option>
            <option value="billing">Billing</option>
            <option value="cancel">Cancel Service</option>
          </select>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" onChange={handleChange} value={formState.subject}/>
          <label htmlFor="message">Message</label>
          <textarea id="message" cols="30" rows="10" onChange={handleChange} value={formState.message}></textarea>
          <button type="submit">Send</button>
        </form>
      )
}


export default Form