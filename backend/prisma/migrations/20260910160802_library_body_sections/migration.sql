/*
  Changes `body` on `library_contents` from plain text to JSONB (an array of
  reading sections, see `LibrarySection` in packages/shared). Existing rows
  are demo/seed content only, so the previous plain text is simply wrapped as
  a JSON string rather than reshaped into sections - the seed script
  overwrites every row with the real, sectioned content right after this
  migration runs.
*/
ALTER TABLE "library_contents"
  ALTER COLUMN "body" TYPE JSONB USING to_jsonb("body");
