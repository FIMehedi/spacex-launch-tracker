interface Launch {
  flight_number: string;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name: string;
  };
  launch_success: boolean;
  launch_failure_details?: {
    reason: string;
  };
  links: {
    mission_patch_small: string;
    mission_patch: string;
    wikipedia: string;
  }
  details: string;
  upcoming: boolean;
}

export default Launch;
