# changevideodate

Générateur de commande [ExifTool](https://exiftool.org/) pour modifier la date et l'heure
d'un fichier vidéo (MP4/MOV) — Windows (PowerShell), macOS (zsh) ou Linux (bash).

L'application construit la commande en temps réel à partir des champs saisis, sans jamais
envoyer de données à un serveur : tout se passe dans le navigateur.

## Fonctionnalités (V1)

- Détection automatique de l'OS du visiteur (repli sur Windows, puis macOS, puis Linux).
- Commande d'installation automatique d'ExifTool si l'outil n'est pas déjà présent.
- Chemin de fichier avec astuce contextuelle pour le récupérer selon l'OS.
- Date et heure via des inputs natifs, convertis au format ExifTool `"YYYY:MM:DD HH:MM:SS"`.
- Options avancées : tags `-CreateDate`, `-MediaCreateDate`, `-TrackCreateDate`,
  `-ModifyDate`, gestion `-api QuickTimeUTC`, `-overwrite_original`, et coordonnées GPS.
- Échappement de guillemets adapté à chaque terminal (double quotes en PowerShell,
  simple quotes en bash/zsh).
- Copie de la commande en un clic avec confirmation visuelle.
- Thème sombre par défaut (avec bascule clair/sombre), interface responsive.

## Stack

Vite + React + TypeScript, Tailwind CSS v4, [lucide-react](https://lucide.dev/) pour les
icônes.

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (type-check + bundle)
npm run lint      # oxlint
```
