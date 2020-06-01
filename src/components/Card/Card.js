import React from 'react';
import { GrBriefcase } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  return (
    <Link to={`/job/${props.jobId}`} className="card">
      <div className="card-logo">
        <svg viewBox="0 0 78 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.1456 29.9522L58.8139 46.9522L40.4822 27.7935L19.4547 47.4919L10.2888 37.7776L41.0214 8.63477L59.3531 28.0633L68.7885 19.4284L77.9543 29.1427L77.1456 29.9522Z"
            fill="#FED430"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.291 36.6984L68.7885 65.8413L48.5698 85L39.6735 75.5556L49.3785 66.381L39.4039 55.5873L29.9685 45.6032L40.2127 35.8889L41.291 36.6984ZM34.0122 60.9842L9.48011 83.9207L0.0446777 73.9365L25.3856 49.9207L34.821 59.9048L34.0122 60.9842Z"
            fill="#1DBF69"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M59.3528 0C62.0486 0 64.2053 1.07937 65.8228 2.96825C67.4403 4.5873 68.249 6.74603 68.249 9.44444C67.9795 11.873 66.9011 14.0317 65.2836 15.6508C63.6661 17.2698 61.2399 18.0794 58.8136 18.0794C56.3873 18.0794 53.9611 16.7302 52.6132 15.1111C50.9957 13.4921 49.9173 11.0635 50.1869 8.63492C50.1869 6.20635 51.2653 4.04762 52.8828 2.42857C54.7698 0.809524 56.9265 0 59.3528 0Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="card-content">
        <h3 className="card__content__title">
          {props.title.length > 20
            ? props.title.substring(0, 18) + '...'
            : props.title}
        </h3>
        <p className="card__content__details">
          {props.location} -{' '}
          <span
            className={`job-status-${
              props.status.toLowerCase() === 'open' ? 'open' : 'close'
            }`}
          >
            {props.status}
          </span>
        </p>
      </div>
      <div className="card__amount">
        <div className="card__amount__icon">
          <GrBriefcase />
        </div>
        <p className="card__amount__value">{`$${props.salary}`}</p>
      </div>
    </Link>
  );
};

export default Card;
