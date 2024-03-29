import InsightRoll from "/src/components/About/InsightRoll";
import Navbar from "/src/components/navbar";
import FooterBiashara from "/src/components/footer-biashara";

export const metadata = {
  title: "Iqra biashara",
  description: `Check out our E-commerce platform.`,
};

const insights = [
  "Holy Quran recitations",
  "Quran Translations in English, Swahili, Somali, and Urdu",
  "Talks by Prominent scholars from Kenya and abroad",
  "Question and Answer sessions on religious matters",
  "Panel discussions by prominent Muslim Ulaamas on Hadith and Fiqh",
  "Enlightening program on Teaching yourself Arabic",
  "Educative program in Kikuyu Language",
  "Local and international news at frequent intervals daily",
  "Talk Shows on Contemporary issues, political, cultural, social and economic issues",
  "Health and educational programmes",
  "Outside broadcasting services",
  "Studio production services for recording programs or commercials/advertisements",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      <div className="w-full md:max-w-7xl border border-[#bfbfbf] dark:border-[#595959] bg-[#f2f2f2] dark:bg-[#1a1a1a] p-2 md:p-4 mt-4 rounded-xl">
        <Navbar />
        {children}
        <FooterBiashara />
      </div>
    </main>
  );
}
