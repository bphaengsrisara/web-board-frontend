"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PostSearchFormData } from "@/interfaces";
import { FormField } from "../ui/form";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTopics } from "@/hooks/use-post";

export default function SearchBar() {
  const { control } = useFormContext<PostSearchFormData>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: topics } = useTopics();

  return (
    <form className="flex w-full gap-2">
      {isExpanded ? (
        <FormField
          name="search"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Search"
              className="flex-1 flex-grow"
              onBlur={() => setIsExpanded(false)}
              autoFocus
            />
          )}
        />
      ) : (
        <>
          <div className="flex flex-grow md:hidden">
            <Image
              src="/images/search.svg"
              alt="Search"
              width={20}
              height={20}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
          <FormField
            name="search"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Search"
                className="hidden flex-grow md:block"
              />
            )}
          />

          <FormField
            name="topicId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-44 flex-1 border-none py-2 shadow-none focus:ring-0">
                  <SelectValue placeholder="Community" />
                </SelectTrigger>
                <SelectContent>
                  {topics?.map((topic) => (
                    <SelectItem key={topic.id} value={topic.id}>
                      {topic.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          <Button asChild className="flex-1">
            <Link href="/post/create">Create +</Link>
          </Button>
        </>
      )}
    </form>
  );
}
