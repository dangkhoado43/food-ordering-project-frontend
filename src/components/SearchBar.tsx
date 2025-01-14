import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  onReset: () => void;
  placeHolder: string;
  searchQuery: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex items-center gap-1 md:gap-3 justify-between flex-row border-2 rounded-full p-2 md:p-3 mx-8 md:m-0 ${
            form.formState.errors.searchQuery && "border-red-500"
          }`}
        >
          <Search
            strokeWidth={2.5}
            size={30}
            className="ml-1 text-rose-600 hidden md:block"
          />
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="border-none shadow-none md:text-xl focus-visible:ring-0"
                    placeholder={placeHolder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            onClick={handleReset}
            type="button"
            variant="outline"
            className="rounded-full font-bold"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="rounded-full font-bold bg-rose-600 hover:bg-rose-500 active:text-rose-600 active:bg-white active:border active:border-rose-600"
          >
            Search
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SearchBar;
