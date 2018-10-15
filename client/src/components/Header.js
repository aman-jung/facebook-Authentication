import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
	renderContent(){
		switch(this.props.auth){
			case null:
			return;
			case false:
			return(
				<li><a href="/auth/facebook">LogIn With Facebook</a></li>
				);
			default:
			return(<li><a href="/api/logout">LogOut</a></li>);
			}
	}
	render(){
		return(
			<div className="container">
			<nav>
			<div className="nav-wrapper">
			<Link to={this.props.auth ?'/surveys':'/'}>Emaily</Link>
			<ul className="right">
			{this.renderContent()}
			</ul>
			</div>
			</nav>
			</div>
			)
	}
}
function mapStateToProps(state){
	return {auth:state.auth}
}
export default connect(mapStateToProps)(Header);