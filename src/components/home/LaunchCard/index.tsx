import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
  item: {
    [x: string]: any;
    flight_number: number;
    mission_name: string;
    links: {
      mission_patch_small: string;
      mission_patch: string;
    };
  };
}

function LaunchCard({ item }:Props): JSX.Element {
  return (
    <Col>
      <Link to={`/details/${item.flight_number}`} className="relative">
        <div className="border border-[#333] rounded p-2 w-40 ">
          <div className="w-full overflow-hidden p-4 h-[142px]">
            <img
              className="w-full"
              src={item.links.mission_patch_small || item.links.mission_patch}
              alt={item.mission_name}
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-medium  pb-2 text-emerald-400 flex items-center justify-center">
              <span>
                {item.mission_name.length > 10
                  ? `${item.mission_name.slice(0, 10)}...`
                  : item.mission_name}
              </span>
              {item.launch_success && (
              <i className="bx bxs-check-circle pl-2" />
              )}
            </h2>
            <div className="text-emerald-500">
              <h4>
                Rocket:
                {item.rocket.rocket_name}
              </h4>
              <h4>
                Year:
                {item.launch_year}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default LaunchCard;
