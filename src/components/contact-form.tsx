"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

interface Address {
  prefecture: string;
  city: string;
  town: string;
}

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);


  async function searchAddress(postalCode: string) {
    const cleanedPostalCode = postalCode.replace(/[-－\s]/g, "");
    if (cleanedPostalCode.length !== 7) {
      toast.error("郵便番号は7桁で入力してください", {
        description: "例：123-4567",
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanedPostalCode}`
      );
      const data = await response.json();

      if (data.results) {
        const result = data.results[0];

        const prefectureInput = document.getElementById(
          "prefecture"
        ) as HTMLInputElement;
        const addressInput = document.getElementById(
          "address"
        ) as HTMLInputElement;

        if (prefectureInput && addressInput) {
          prefectureInput.value = result.address1;
          addressInput.value = `${result.address2}${result.address3}`;
        }

        toast.success("住所を自動入力しました", {
          description: `${result.address1}${result.address2}${result.address3}`,
        });
      } else {
        toast.error("住所が見つかりませんでした", {
          description: "郵便番号を確認してください",
        });
      }
    } catch (error) {
      toast.error("エラーが発生しました", {
        description: "しばらく時間をおいて再度お試しください",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-8 bg-white p-8 rounded-lg">
      {/* お名前 */}
      <div className="grid gap-2">
        <Label htmlFor="name" className="required">
          お名前
        </Label>
        <Input id="name" name="name" placeholder="山田 太郎" required />
      </div>

      {/* ふりがな */}
      <div className="grid gap-2">
        <Label htmlFor="nameKana" className="required">
          ふりがな
        </Label>
        <Input
          id="nameKana"
          name="nameKana"
          placeholder="やまだ たろう"
          required
        />
      </div>

      {/* 郵便番号 */}
      <div className="grid gap-2">
        <Label htmlFor="postalCode" className="required">
          郵便番号
        </Label>
        <div className="flex gap-2 items-center">
          <Input
            id="postalCode"
            name="postalCode"
            placeholder="123-4567"
            className="max-w-[8rem]"
            required
          />
          <Button
            type="button"
            variant="outline"
            className="whitespace-nowrap"
            disabled={isLoading}
            onClick={() => {
              const input = document.getElementById(
                "postalCode"
              ) as HTMLInputElement;
              if (input) {
                searchAddress(input.value);
              }
            }}
          >
            {isLoading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                検索中...
              </>
            ) : (
              "住所を検索"
            )}
          </Button>
        </div>
      </div>

      {/* 都道府県 */}
      <div className="grid gap-2">
        <Label htmlFor="prefecture" className="required">
          都道府県
        </Label>
        <Input
          id="prefecture"
          name="prefecture"
          placeholder="東京都"
          required
        />
      </div>

      {/* 住所 */}
      <div className="grid gap-2">
        <Label htmlFor="address" className="required">
          住所
        </Label>
        <Input
          id="address"
          name="address"
          placeholder="千代田区丸の内1-1-1"
          required
        />
      </div>

      {/* 電話番号 */}
      <div className="grid gap-2">
        <Label htmlFor="phone" className="required">
          電話番号
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="03-1234-5678"
          required
        />
      </div>

      {/* Eメール */}
      <div className="grid gap-2">
        <Label htmlFor="email" className="required">
          Eメール
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>

      {/* 参加人数 */}
      <div className="grid gap-2">
        <Label htmlFor="participants" className="required">
          参加人数
        </Label>
        <Input
          id="participants"
          name="participants"
          type="number"
          min="1"
          placeholder="1"
          className="max-w-[8rem]"
          required
        />
      </div>

      {/* 送信ボタン */}
      <div className="pt-4 text-center">
        <Button
          type="submit"
          className="w-1/2 bg-red-500 hover:bg-red-600 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "送信中..." : "送信する"}
        </Button>
      </div>
    </form>
  );
}
