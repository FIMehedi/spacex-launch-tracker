import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import Launch from '../../../features/api/types';

interface Props {
  launch: Launch
}

function LaunchCard({ launch }:Props): JSX.Element {
  return (
    <Col>
      <Link to={`/details/${launch.flight_number}`} className="relative">
        <div className="border border-[#333] rounded p-2 w-40 ">
          <div className="w-full overflow-hidden p-4 h-[142px]">
            <img
              className="w-full"
              src={launch.links.mission_patch_small || launch.links.mission_patch}
              alt={launch.mission_name}
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-medium  pb-2 text-emerald-400 flex items-center justify-center">
              <span>
                {launch.mission_name.length > 10
                  ? `${launch.mission_name.slice(0, 10)}...`
                  : launch.mission_name}
              </span>
              {launch.launch_success && (
              <i className="bx bxs-check-circle pl-2" />
              )}
            </h2>
            <div className="text-emerald-500">
              <h4>
                Rocket:
                {launch.rocket.rocket_name}
              </h4>
              <h4>
                Year:
                {launch.launch_year}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default LaunchCard;
