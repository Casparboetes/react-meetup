import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class TopicList extends PureComponent {
  static propTypes = {
  	topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
	})).isRequired
}

renderTopic(topic) {
  return <li key={topic.topic}>{ topic.topic } ({topic.count})</li>
}

	render() {
		return (
      <div>
          <h1 className="topic">Topics Top 10</h1>
          <ol className="topicUl">{ this.props.topics.map(this.renderTopic) }</ol>
      </div>
		)
	}
}

export default TopicList
