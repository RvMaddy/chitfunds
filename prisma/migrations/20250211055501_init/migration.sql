-- CreateTable
CREATE TABLE "ChitGroup" (
    "group_id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "total_amount" DECIMAL(65,30) NOT NULL,
    "monthly_amount" DECIMAL(65,30) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER NOT NULL,
    "tenure" INTEGER NOT NULL,
    "no_of_members" INTEGER NOT NULL,
    "chit_collector" TEXT NOT NULL,
    "bid_type" TEXT NOT NULL,
    "minimum_bid_percentage" DECIMAL(65,30) NOT NULL,
    "no_of_installments" INTEGER NOT NULL,
    "maximum_bid_percentage" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChitGroup_pkey" PRIMARY KEY ("group_id")
);
