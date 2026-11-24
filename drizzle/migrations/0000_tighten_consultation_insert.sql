DROP POLICY IF EXISTS "Anyone can submit a consultation request" ON public.consultation_requests;
CREATE POLICY "Anyone can submit a valid consultation request" ON public.consultation_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 120
  AND char_length(work_email) BETWEEN 3 AND 255
  AND work_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(btrim(company_website)) BETWEEN 1 AND 255
  AND char_length(btrim(service)) BETWEEN 1 AND 120
  AND char_length(btrim(requirements)) BETWEEN 1 AND 5000
  AND (monthly_budget IS NULL OR char_length(monthly_budget) <= 100)
  AND (source_page IS NULL OR char_length(source_page) <= 500)
);