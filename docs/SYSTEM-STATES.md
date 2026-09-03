# Addash — Sistem Durumları & Hata Yönetimi Kılavuzu

Bu belge; Addash şablonundaki hata sınırları, yetkilendirme ekranları, yükleme animasyonları ve boş durum bileşenlerinin kullanımını özetler.

---

## 🚦 Rota ve Durum Tablosu

| Durum | Dosya Yolu | Tip | Tetiklenme Koşulu |
|---|---|---|---|
| **404 Sayfa Bulunamadı** | `src/app/not-found.tsx` | Kök Sayfa | Tanımlanmamış herhangi bir URL'e erişildiğinde |
| **500 Sunucu/İstemci Hatası** | `src/app/(dashboard)/error.tsx` | Sayfa İçi Sınır | Dashboard içerisinde yakalanan unhandled exception |
| **Kök Hata Sınırı** | `src/app/global-error.tsx` | Kök Sınır | Root layout çökmelerinde çalışan izole fallback |
| **403 Yetkisiz Erişim** | `src/app/(dashboard)/forbidden/page.tsx` | Dashboard Sayfası | Kullanıcı rolü sayfayı görüntülemeye yetersiz olduğunda |
| **200 İşlem Başarılı** | `src/app/(dashboard)/success/page.tsx` | Dashboard Sayfası | Kritik form gönderimi, kayıt tamamlama onaylarında |
| **Yükleme İskeleti** | `src/app/(dashboard)/loading.tsx` | React Suspense | Dashboard rotaları arası geçişlerde |
| **İnteraktif Durum Galerisi** | `src/app/(dashboard)/states/page.tsx` | Sergi Sayfası | Tüm bu durumları canlı test etmek için (`/states`) |

---

## 🧩 Bileşen Kullanım Örnekleri

### 1. Boş Durum (`EmptyState`)
Veri bulunamadığında, arama sonucu çıkmadığında veya filtreler eşleşmediğinde kullanılır:

```tsx
import { EmptyState } from "@/components/feedback/empty-state";
import { Button } from "@/components/ui/button";

// 4 hazır preset: "no-data" | "no-results" | "filter-empty" | "error"
<EmptyState
  preset="no-data"
  title="Henüz Kayıt Bulunmuyor"
  description="Bu tabloya ait herhangi bir veri satırı eklenmemiş."
  action={<Button variant="primary" size="sm">Yeni Ekle</Button>}
/>
```

### 2. İskelet Yükleyiciler (`Skeleton`)
Sayfa yüklenirken Layout Shift (CLS) oluşmasını engeller:

```tsx
import { Skeleton, SkeletonMetricCard, SkeletonTable } from "@/components/ui/skeleton";

// KPI Kart İskeleti (CLS = 0)
<SkeletonMetricCard />

// Tablo İskeleti
<SkeletonTable rows={5} columns={5} />
```

### 3. Vektörel Spinner & İlerleme Çubuğu
```tsx
import { Spinner, BroadsheetProgressBar } from "@/components/ui/spinner";

// 5 Boyut: "xs" | "sm" | "md" | "lg" | "xl"
<Spinner size="lg" />

// Kesintisiz Editoryal İlerleme Çubuğu
<BroadsheetProgressBar />
```

### 4. Yetkisiz Erişim Kartı (`AccessDeniedCard`)
```tsx
import { AccessDeniedCard } from "@/components/feedback/access-denied-card";

<AccessDeniedCard
  title="Erişim Kısıtlandı"
  description="Bu sayfayı görüntülemek için gerekli yetkiye sahip değilsiniz."
/>
```
