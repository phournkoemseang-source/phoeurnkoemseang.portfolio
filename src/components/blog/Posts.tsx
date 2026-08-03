import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  /** Subdirectory of src/app to read posts from (defaults to blog posts) */
  dir?: [string, string, string, string];
  /** Base path for card links (defaults to /blog) */
  basePath?: string;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  dir = ["src", "app", "blog", "posts"],
  basePath = "/blog",
}: PostsProps) {
  let allPosts = getPosts(dir);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allPosts = allPosts.filter((post) => !exclude.includes(post.slug));
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedPosts = range
    ? sortedPosts.slice(range[0] - 1, range.length === 2 ? range[1] : sortedPosts.length)
    : sortedPosts;

  return (
    <>
      {displayedPosts.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedPosts.map((post) => (
            <Post
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
              basePath={basePath}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
