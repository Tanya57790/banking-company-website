"use client";

export interface EyePasswordProps {
  onClick: () => void;
  isOpenEye: boolean;
}

const EyePassword = ({ onClick, isOpenEye }: EyePasswordProps) => {
  return (
    <span
      onClick={onClick}
      className="absolute top-4.5 right-0 mt-1.5 mr-4.5 cursor-pointer"
    >
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97217 9.375C10.3529 9.375 11.4722 8.25571 11.4722 6.875C11.4722 5.49429 10.3529 4.375 8.97217 4.375C7.59146 4.375 6.47217 5.49429 6.47217 6.875C6.47217 8.25571 7.59146 9.375 8.97217 9.375Z"
          fill="#59595A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0750104 6.41391C1.31439 2.68809 4.82876 0 8.9726 0C13.1145 0 16.6275 2.6856 17.8685 6.40871C17.9687 6.7096 17.9688 7.03515 17.8687 7.33609C16.6294 11.0619 13.115 13.75 8.97114 13.75C4.82923 13.75 1.3162 11.0644 0.0752834 7.34129C-0.0250012 7.04041 -0.0250966 6.71486 0.0750104 6.41391ZM13.3472 6.875C13.3472 9.29125 11.3884 11.25 8.97217 11.25C6.55592 11.25 4.59717 9.29125 4.59717 6.875C4.59717 4.45875 6.55592 2.5 8.97217 2.5C11.3884 2.5 13.3472 4.45875 13.3472 6.875Z"
          fill="#59595A"
        />
      </svg>
      <svg
        width="20"
        height="20"
        className={`absolute -top-1 -left-0.5 ${
          isOpenEye ? "hidden" : "block"
        }`}
      >
        <line
          fill="none"
          id="XMLID_15_"
          stroke="#59595A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="3"
          x2="20"
          y1="3"
          y2="20"
        />
      </svg>
    </span>
  );
};

export default EyePassword;
