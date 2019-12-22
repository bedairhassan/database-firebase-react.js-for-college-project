import React from 'react';
import firebase from 'firebase'

export default class Student extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            data: [{
                student_id: 0,
                credit_achieved: 1,
                supervisor_id: 2,
                contactinfo_id: 3,
                department_id: 4,
                gpa: 5
            }, {
                student_id: 1,
                credit_achieved: 1,
                supervisor_id: 2,
                contactinfo_id: 3,
                department_id: 4,
                gpa: 5
            }]
        }

        var firebaseConfig = {
            apiKey: "AIzaSyAsAFLS6C8y-V4IH0gD9K6guyeAWX_WVzI",
            authDomain: "databaseproject-f8b91.firebaseapp.com",
            databaseURL: "https://databaseproject-f8b91.firebaseio.com",
            projectId: "databaseproject-f8b91",
            storageBucket: "databaseproject-f8b91.appspot.com",
            messagingSenderId: "157170321606",
            appId: "1:157170321606:web:f1e52cadc2e5ff5cf5afc7"
        };

        this.app = firebase.initializeApp(firebaseConfig)
        this.ref = this.app.database().ref().child('student')
        // this.ref.push({})
    }

    componentDidMount(){

        // this.ref.on('value',function(incomingdata){

        //     this.setState({data:[...incomingdata]})

        // },function(err){
        //     console.log(err)
        // })
    }

    delete(id) {

        alert(`deleting id of ${id}`)
    }

    render() {

        return (

            <center>
                <div>
                    <h1>I am a student.</h1>

                    <table>
                        <thead>
                            <tr>

                                <th> student_id </th>
                                <th> credit_achieved </th>
                                <th> supervisor_id </th>
                                <th> contactinfo_id </th>
                                <th> department_id </th>
                                <th> gpa </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(
                                    dat =>
                                        <tr key={dat.student_id}>
                                            <td>{dat.student_id}</td>
                                            <td>{dat.credit_achieved}</td>
                                            <td>{dat.supervisor_id}</td>
                                            <td>{dat.contactinfo_id}</td>
                                            <td>{dat.department_id}</td>
                                            <td>{dat.gpa}</td>

                                            <td><button onClick={() => this.delete(dat.student_id)}>delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>

                    <button onClick={() => {
                        this.ref.push({

                            student_id: 0,
                            credit_achieved: 1,
                            supervisor_id: 2,
                            contactinfo_id: 3,
                            department_id: 4,
                            gpa: 5
                        }
                        ).then(function(value){
                            console.log(value)
                        })
                    }}>ref.push</button>
                </div>
            </center>
        )
    }
}