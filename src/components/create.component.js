import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Create extends Component {

    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            nic_number: ''
        }
    }

    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }

    onChangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }

    onChangeNICNumber(e){
        this.setState({
            nic_number: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The Values are ${this.state.person_name}, ${this.state.business_name} and ${this.state.nic_number}`)
        this.setState({
            person_name: '',
            business_name: '',
            nic_number: ''
        })
    }

    render() {
        return(
            /*<div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name</label>
                        <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonName}/>
                    </div>

                    <div className="form-group">
                        <label>Add Business Name</label>
                        <input type="text" className="form-control" value={this.state.business_name} onChange={this.onChangeBusinessName}/>
                    </div>

                    <div className="form-group">
                        <label>Add NIC Number</label>
                        <input type="text" className="form-control" value={this.state.nic_number} onChange={this.onChangeNICNumber}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>*/

            <div className="notes_wrapper">

                <div className="log_sign">
                    <a href="/signup" className="pri_btn">Need an account?</a>
                </div>

                <div className="register cua">
                    <div className="display_text">
                        <span>Get started again</span>
                    </div>
                    <form className="form_login">
                        <input type="text" name="username" value="" className="l_username" autoFocus required
                               spellCheck="false" autoComplete='false' placeholder='Username'/>
                            <input type="password" name="password" value="" className="l_password" id='l_password'
                                   required placeholder='Password'/>
      <span className="show_psswrd s_p_l">
        <i className="fas fa-lock"></i>
      </span>
                                <input type="submit" name="" value="Login To Continue" className="l_submit"/>
                    </form>
                    <div className="forgot_psswrd">
                        <a href="forgot-password" className="a_pri" alt="Forgot your password">Forgot your password?</a>
                    </div>
                </div>

            </div>



            /*<div>
                <section className="content-header">
                    <h1>
                        User Management
                        <small>Information on users of the systems</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
                        <li><a href="#stock"><i className="fa fa-users"></i>Users</a></li>
                    </ol>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Current Users</h3>

                                    <div className="box-body">
                                        <table datatable="ng" id="example1"
                                               className="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Department</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr ng-repeat="user in users">
                                                <td id="username_td_{{user.username}}"><a href="">{{}}</a>
                                                </td>
                                                <td id="name_td_{{user.username}}">{{}}</td>
                                                <td id="email_td_{{user.username}}">{{}}</td>
                                                <td id="type_td_{{user.username}}">{{}}</td>
                                                <td id="department_td_{{user.username}}">{{}}</td>
                                                <td>
                                                    <!--<button class="btn btn-xs btn-info" ng-click="editUser(user.username)"><i class="fa fa-pencil"></i>  Edit</button>-->
                                                    <button className="btn btn-xs btn-danger"
                                                            ng-click="removeUser(user.username)"><i
                                                        className="fa fa-close"></i> Remove
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th>Username</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Department</th>
                                                <th>Actions</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Default box -->
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">{{functionHeader}} User</h3>

                                    <div className="box-body">
                                        <!-- form start -->
                                        <form>
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label htmlFor="full_name">Full Name</label>
                                                    <div>
                                                        <input type="text" className="form-control" requried="requried"
                                                               id="full_name" ng-model="full_name" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="username" className="control-label">Username</label>
                                                    <div className="">
                                                        <input type="text" className="form-control" requried="requried"
                                                               id="username" ng-model="username" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email" className="control-label">Email</label>
                                                    <div className="">
                                                        <input type="email" className="form-control" requried="requried"
                                                               id="email" ng-model="email" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password" className="control-label">Password</label>
                                                    <div className="">
                                                        <input type="password" className="form-control"
                                                               requried="requried" id="password" ng-model="password"
                                                               placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="user_type" className="control-label">Type</label>

                                                    <div className="">
                                                        <select className="form-control" requried="requried"
                                                                id="user_type" ng-model="user_type">
                                                            <option value="Chief Pharmacist">Chief Pharmacist</option>
                                                            <option value="Assistant Pharmacist">Assistant Pharmacist
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department" className="control-label">Department /
                                                        Location</label>
                                                    <div className="">
                                                        <input type="text" className="form-control" requried="requried"
                                                               id="department" ng-model="department" placeholder="Name"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /.box-body -->
                                            <div className="box-footer">
                                                <button ng-click="neglect()" className="btn btn-default">Cancel</button>
                                                <button ng-click="addUser()"
                                                        className="btn btn-primary pull-right">{{functionHeader}}</button>
                                            </div>
                                            <!-- /.box-footer -->
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>*/
        )
    }
}
