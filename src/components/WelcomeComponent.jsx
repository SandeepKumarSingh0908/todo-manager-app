import React from 'react'
import { Link, useParams } from 'react-router-dom';
const WelcomeComponent = () => {
    const {name} = useParams();
  return (
    <div>Welcome {name}, You can manage your todo's <Link to ="/todos">here</Link></div>
  )
}

export default WelcomeComponent