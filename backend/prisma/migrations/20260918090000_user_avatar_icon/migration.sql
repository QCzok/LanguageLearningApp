-- Nutzer sollen ein Profil-Icon (Tier) statt nur des Anfangsbuchstabens
-- wählen können. Eigene Spalte statt Wiederverwendung von "avatarUrl", weil
-- dort weiterhin eine echte Bild-URL für einen späteren Foto-Upload stehen
-- könnte – beides soll unabhängig voneinander gesetzt werden können.
ALTER TABLE "users" ADD COLUMN "avatarIcon" TEXT;
