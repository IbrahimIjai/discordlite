"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// import { useUser } from "@clerk/clerk-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required.",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required.",
  }),
});

enum content {
  join = "join",
  create = "create",
}
export const InitialModal = ({ profile }: { profile: any }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [contentView, setContentView] = useState<content>(content.create);
  const [servers, setServers] = useState(null);
  const [loadingServer, setServersLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  console.log("this is user", user);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  const loadServers = async () => {
    try {
      setServersLoading(true);
      const serverslist = await axios.get("/api/servers");
      serverslist && setServers(serverslist.data);
      console.log("this is servers list", serverslist.data);
      setServersLoading(false);
    } catch (error) {
      console.log(error);
      setServersLoading(false);
    }
  };
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/servers", values);

      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="p-0 overflow-hidden text-black bg-white">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="flex justify-center gap-2 font-bold">
            <Button
              className={`${
                contentView == content.join &&
                "bg-[#404eed] text-white hover:bg-[#404eed]/70"
              }`}
              onClick={() => {
                loadServers();
                setContentView(content.join);
              }}
            >
              Join Public Server
            </Button>
            <Button
              className={`${
                contentView == content.create &&
                "bg-[#404eed] text-white hover:bg-[#404eed]/70"
              }`}
              onClick={() => setContentView(content.create)}
            >
              Customize your server
            </Button>
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {contentView == "create"
              ? "Give your server a personality with a name and an image. You can always change it later."
              : "Join great server, interact, connect, and be part of a great community"}
          </DialogDescription>
        </DialogHeader>
        {contentView == content.create ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="px-6 space-y-8">
                <div className="flex items-center justify-center text-center">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FileUpload
                            endpoint="serverImage"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
                        Server name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="text-black border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter server name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="px-6 py-4 bg-gray-100">
                <Button variant="primary" disabled={isLoading}>
                  Create
                </Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <ScrollArea className="my-2 h-[calc(50vh-3rem)] pb-2 rounded-lg flex flex-col items-center w-full gap-3 mx-6">
            {loadingServer ? (
              <ServersSkeleton />
            ) : servers ? (
              // @ts-ignore
              servers?.map((item: ServerTsError, i) => (
                <ServerCardList
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  inviteCode={item.inviteCode}
                  imageUrl={item.imageUrl}
                />
              ))
            ) : (
              <div>No server found</div>
            )}
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

const ServerCardList = ({
  name,
  id,
  imageUrl,
  inviteCode,
}: {
  name: string;
  id: string;
  imageUrl: string;
  inviteCode: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex bg-[#f6f6f6] rounded-lg border w-4/5 mb-4 p-3">
      <div className="relative w-12 h-12 ">
        <Image src={imageUrl} alt={`${name} display pics`} fill />
      </div>
      <div className="flex items-center justify-between w-full px-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <Button
          className="bg-[#404eee]"
          onClick={() => router.push(`/invite/${inviteCode}`)}
        >
          Join
        </Button>
      </div>
    </div>
  );
};

const ServersSkeleton = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mx-2 mb-4">
        <Skeleton className="w-20 h-12" />
        <Skeleton className="w-full h-12" />
      </div>
      <div className="flex items-center gap-3 mx-2 mb-4">
        <Skeleton className="w-20 h-12" />
        <Skeleton className="w-full h-12" />
      </div>
      <div className="flex items-center gap-3 mx-2 mb-4">
        <Skeleton className="w-20 h-12" />
        <Skeleton className="w-full h-12" />
      </div>
      <div className="flex items-center gap-3 mx-2 mb-4">
        <Skeleton className="w-20 h-12" />
        <Skeleton className="w-full h-12" />
      </div>
      <div className="flex items-center gap-3 mx-2 mb-4">
        <Skeleton className="w-20 h-12" />
        <Skeleton className="w-full h-12" />
      </div>
    </div>
  );
};
interface ServerTsError {
  id: string;
  name: string;
  inviteCode: string;
  imageUrl: string;
}
