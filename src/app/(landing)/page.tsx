import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-red-500 min-h-screen">
      <div className="px-8  bg-[#404eed] pt-[150px] w-full">
      <div className="w-full ">
        <div className="flex flex-col items-center w-full gap-8 md:flex-row md:items-start">
          <span className="font-[900] text-4xl uppercase">Imagine a place...</span>
          <span className="text-lg">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </span>
          <div className="flex flex-col w-full gap-5 md:flex-row">
            <Button className="p-6 whitespace-nowrap">
              {/* <DownloadCloud className="w-4 h-4 mr-4" /> */}
              Download for Windows
            </Button>
            <Button className="p-8 text-white bg-black w-ful hover:bg-black/70 whitespace-nowrap">
              Open Discord in your browser
            </Button>
          </div>
        </div>

        {/* <div className="w-full">
          <div className="w-[375px] mt-12 h-[192px] relative -ml-[80px] md:hidden">
            <Image src="/assets/herosSm.svg" fill alt="An image" />
          </div>
          <div className="w-[500px] h-[330px] relative md:inline-flex  ">
            <Image src="/assets/herosMd.svg" fill alt="An image" />
          </div>
          <div className="relative w-full h-1/2 md:inline-flex ">
            <Image src="/assets/herosLg.svg" fill alt="An image" />
          </div>
        </div> */}
      </div>
    </div>
     </main>
  )
}
