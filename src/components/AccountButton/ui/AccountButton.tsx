import Link from "next/link";

interface AcccountButtonProps {
  margin?: string;
}

const AccountButton = ({ margin = "m-0" }: AcccountButtonProps) => {
  return (
    <Link
      href="#"
      className={`block font-lexend text-[14px] px-6 py-3.5 w-36 h-12.25 bg-primary-600 rounded-[82px] hover:bg-primary-700 active:bg-primary-600 transition-all duration-200 ease-in-out ${margin} 2xl:text-lg 2xl:px-7.5 2xl:py-4.5 2xl:w-45.75 2xl:h-15.75`}
    >
      Open Account
    </Link>
  );
};

export default AccountButton;
