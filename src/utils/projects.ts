import { Metadata } from "@/utils/utils";

export const sortProjects = (
  projects: {
    metadata: Metadata;
    slug: string;
    content: string;
  }[]
) =>
  projects.sort((a, b) => {
    // Helper to get a comparable date value (timestamp) or -Infinity for "current"
    function getDateToOrDate(post: any) {
      const { dateTo, dateFrom, date } = post.metadata;
      // Treat as "current" if there is a dateFrom but no dateTo
      if (dateFrom && !dateTo) return Infinity;
      if (dateTo) return new Date(dateTo).getTime();
      if (date) return new Date(date).getTime();
      return -Infinity;
    }
    // Helper to get dateFrom for tie-breaker
    function getDateFrom(post: any) {
      const { dateFrom } = post.metadata;
      if (dateFrom) return new Date(dateFrom).getTime();
      return -Infinity;
    }

    const aDateTo = getDateToOrDate(a);
    const bDateTo = getDateToOrDate(b);

    // Sort descending by dateTo (or date)
    if (aDateTo !== bDateTo) {
      return bDateTo - aDateTo;
    }

    // If both are "current", sort by date descending dateFrom
    const aDateFrom = getDateFrom(a);
    const bDateFrom = getDateFrom(b);

    return bDateFrom - aDateFrom;
  });
