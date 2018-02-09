import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './RsvpItem.css'

class RsvpItem extends PureComponent {
	static propTypes = {
		rsvp: PropTypes.shape({
			rsvp_id: PropTypes.number.isRequired,
			member: PropTypes.shape({
				member_name: PropTypes.string.isRequired,
				photo: PropTypes.string
			}),
			event: PropTypes.shape({
				event_name: PropTypes.string.isRequired
			})
		}).isRequired
	}

	render() {
    const { member, event } = this.props.rsvp
  		return (
  			<div className="rsvp-item" style={{backgroundImage: `url(${member.photo})`}}>
  				<h4>{ event.event_name }</h4>

  				<span style={{color:'white'}}>
  					{ member.member_name } is joining this event.
  				</span>
  			</div>
  		)
  	}
}

export default RsvpItem
