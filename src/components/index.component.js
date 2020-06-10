import React, {Component} from 'react';

export default class Index extends Component {
    render() {
        return(
            <div className="notes_wrapper">

                <div className="log_sign">
                    <a href="/login" className="pri_btn">Already have an account?</a>
                </div>

                <div className="register cua ">
                    <div className="display_text">
                        <span>Get started now and let the fun begins</span>
                    </div>
                    <form className="form_register">
                        <input type="text" name="username" value="" className="s_username filter_illegal" autoFocus
                               spellCheck="false" autoComplete='false' placeholder='Username' required/>
                            <div className="username_checker">
                                <span className="checker_text">username not available</span>
                                <span className="checker_icon">
          <i className="far fa-frown"></i>
        </span>
                            </div>
                            <input type="text" name="first_name" value="" autoComplete="off" placeholder="First name"
                                   className="s_firstname small_input filter_illegal" spellCheck="false" maxLength="20"
                                   required/>
                                <input type="text" name="surname" value="" autoComplete="off" placeholder="Surname"
                                       className="s_surname small_input filter_illegal" spellCheck="false"
                                       maxLength="20" required/>
                                    <input type="email" name="email" value="" className="s_email" spellCheck="false"
                                           autoComplete='false' placeholder='Email' required/>
                                        <input type="password" name="password" value="" id='s_password'
                                               className="s_password" placeholder='Password' required/>
      <span className="show_psswrd s_p_s">
        <i className="fas fa-lock"></i>
      </span>
                                            <div className="terms_div">
                                                <input type="checkbox" id="s_terms" name="s_terms" className="s_terms"
                                                       required/>
                                                    <label htmlFor="s_terms" className="terms">I agree to
                                                        <a href="/terms" className="a_pri">Instagram Terms</a>
                                                    </label>
                                            </div>
                                            <input type="submit" name="" value="Signup For Free" className="s_submit"/>
                    </form>
                </div>

            </div>
        )
    }
}
